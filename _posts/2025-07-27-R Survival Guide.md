---
layout: post
title: The Beginner's R Survival Guide
date: 2025-07-27 11:59:16
description: A practical guide to help beginners write cleaner R code, manage projects better, and avoid common mistakes.
tags: R, data analysis
categories: guide
pretty_table: true
giscus_comments: true
related_publications: false
featured: false
toc:
  sidebar: left
---

I'm not an expert in R, but while working on my project on microbial ecology, I often felt overwhelmed managing different datasets. There was chaos. Most times, I’d forget what each file was for or how I did certain steps. Eventually, I lost track of so much that I decided to collect tips and best practices to make my RStudio workflow smoother. This blog post is a beginner-friendly guide to help you write better R code, organise your projects, and share your work more effectively.

**NOTE:** I used examples from microbial ecology, but the approach is similar for any R-based data analysis. Please don’t focus too much on terms like OTU or alpha diversity. You can replace them with general names like sales_data or apple_counts if that makes it easier to follow.

---

## Beginner Essentials: Writing, Running, and Organising R Code

_(Focus: Clean workflows, avoiding common pitfalls, setting up projects)_  
This guide helps new R users establish good habits from the start. Whether you’re setting up a project, writing scripts, or debugging errors, these tips will save you time and frustration.

---

### I. Project Setup & File Management

**Problem:** Saving scripts randomly (e.g., on your desktop) leads to lost work and confusion.  
**Fix:** Use a consistent folder system and RStudio Projects to keep everything organised and easy to find.

#### 1. Basic Project Structure

A clear folder setup is the foundation of a reproducible project. Here’s a simple structure to follow:

```text
Microbial_Diversity_Project/
├── data/            # Raw data files (never edit these directly!)
│   ├── otu_table.csv
│   └── metadata.txt
├── scripts/         # Your R code, numbered for order
│   ├── 01_data_clean.R
│   └── 02_alpha_diversity.R
├── outputs/         # Results like plots and tables
│   ├── figures/
│   └── tables/
├── backups/         # Optional: Save workspace or script backups here
└── README.txt       # Quick notes about the project
```

- **data/**: Store untouched raw data here to preserve the originals.
- **scripts/**: Organise scripts by task with numbers (e.g., 01* for cleaning, 02* for analysis).
- **outputs/**: Keep results separate for easy access (subfolders like figures/ for plots).
- **backups/**: (Optional) Save workspace or script backups for extra safety.
- **README.txt**: Write down what the project does and any key details.

#### 2. Always Use RStudio Projects (`.Rproj`)

**Why?**  
RStudio Projects automatically set your working directory to the project folder, so your code will "just work" on any computer.  
**How?**

- In RStudio: Go to `File > New Project > New Directory` and create your project in a new folder.
- This creates a `.Rproj` file—always open this to work on your project.

#### 3. Set Your Working Directory Safely

**Never do this (absolute path, only works on your computer):**

```r
setwd("C:/Users/YourName/Desktop/Project")
```

**Do this instead:**

- **Best:** Use RStudio Projects (recommended, see above).
- **Or:** Use the `{here}` package for robust, portable paths:

  ```r
  # Install once: install.packages("here")
  library(here)
  otu_data <- read.csv(here("data", "otu_table.csv"))
  ```

- **Tip:** Always use relative paths (e.g., `"data/otu_table.csv"`) so your code works anywhere.

---

### II. Script Writing Fundamentals

**Problem:** A messy, giant script is hard to read or fix.  
**Fix:** Structure your script logically and adopt good habits early.

#### 1. Script Structure Template

A well-organised script is like a recipe: it’s clear what each part does. Here’s a starter template:

```r
# ---- HEADER ----
# Project: Microbial Diversity Study
# Author: Your Name
# Date: 2023-08-01
# Description: Cleans OTU table and calculates alpha diversity

# ---- SETUP ----
rm(list = ls())  # Clear memory to avoid old variables causing issues
library(readr)   # Load tools for reading data
library(here)    # For safe file paths

input_path <- here("data", "otu_table.csv")
output_dir <- here("outputs", "figures")

# ---- LOAD DATA ----
otu_data <- read_csv(input_path)

# ---- CLEAN DATA ----
otu_data_clean <- otu_data[complete.cases(otu_data), ]  # Remove rows with missing values

# ---- SAVE RESULTS ----
write_csv(otu_data_clean, here("data", "otu_table_clean.csv"))
```

- **Header:** Notes about the project (who, when, why).
- **Setup:** Clear out old data and load packages.
- **Load Data:** Bring in your raw data.
- **Clean Data:** Make it usable.
- **Save Results:** Store the output.

> **Note:** Using `rm(list = ls())` at the start of your script does **not** truly reset your R session. It only removes objects, but loaded packages, options, and the working directory remain unchanged. For truly reproducible scripts, always restart R (e.g., with `Ctrl+Shift+F10` in RStudio) and ensure your script loads all needed packages and sets options explicitly.

#### 2. Life-Saving Habits

- **Save often:** Hit Ctrl+S in RStudio to avoid losing work.
- **Comment clearly:** Explain tricky steps for your future self:
  ```r
  # Convert sample dates from MM/DD/YY to YYYY-MM-DD for consistency
  metadata$Date <- as.Date(metadata$Date, format = "%m/%d/%y")
  ```
- **Use section breaks:** In RStudio, Ctrl+Shift+R adds collapsible sections (e.g., `# ---- LOAD DATA ----`) for easy navigation.

---

### III. Running Code Without Panic

**Problem:** Running a huge script all at once creates a mess of errors.  
**Fix:** Take it step-by-step to catch issues early.

#### 1. Safe Execution Workflow

- Open your script in RStudio.
- Run lines one-by-one with Ctrl+Enter (or Cmd+Enter on Mac).
- After each step, peek at the Environment pane (top-right) to see what’s in memory.
- Fix problems right away before moving on.

#### 2. When Things Break

- **Check your data:**
  ```r
  print(head(otu_data))  # Look at the first few rows
  ```
- **List variables:**
  ```r
  ls()  # See everything in memory
  ```
- **Test snippets:**
  ```r
  mean(otu_data_clean$Abundance, na.rm = TRUE)  # Try a small piece in the console
  ```
- **Tip:** Restart R (`Session > Restart R`, `Ctrl+Shift+F10 (Windows and Linux)`, or `Command+Shift+F10 (Mac OS)`) if you’re stuck—it clears memory and lets you start fresh.
  - Even if you're fine, it's always best to restart R very often and re-run your under-development script from the top.

---

### IV. Saving & Exporting Results

**Problem:** Manually saving plots or tables isn’t repeatable.  
**Fix:** Use code to save everything automatically.

#### 1. Save Plots Automatically

Programmatic saving ensures consistency:

```r
png(file = here("outputs", "figures", "shannon_histogram.png"), width = 800, height = 600)
hist(otu_data_clean$Shannon, main = "Shannon Diversity Index Distribution")
dev.off()  # Closes the file—don’t skip this!
```

> `dev.off()` is critical; without it, R might crash.

#### 2. Save Tables

Export data to CSV for later use:

```r
write.csv(otu_data_clean, here("outputs", "tables", "otu_table_clean.csv"), row.names = FALSE)
```

> `row.names = FALSE` keeps the file clean by skipping row numbers.

#### 3. Never Lose Work

Save your workspace as a backup:

```r
save.image(here("backups", "workspace_after_cleaning.RData"))
# Reload later with:
load(here("backups", "workspace_after_cleaning.RData"))
```

---

### V. Avoiding 10 Common Beginner Traps

Here’s how to dodge frequent headaches:

#### 1. Path Errors

**Problem:** Wrong file paths break your code.

```r
read.csv("otu_table.csv")  # Assumes script is in the root
```

**Fix:** Use relative paths or `here()` from your project directory.

```r
read.csv(here("data", "otu_table.csv"))
```

#### 2. Overwriting Variables

**Problem:** Reusing names wipes out data.

```r
result <- calculate_diversity(otu_data)
result <- plot_diversity(otu_data)  # Oops, diversity results are gone!
```

**Fix:** Use unique, descriptive names.

```r
diversity_result <- calculate_diversity(otu_data)
diversity_plot <- plot_diversity(otu_data)
```

#### 3. Not Closing Plots

**Problem:** Open plot devices cause errors.

```r
png("my_plot.png")
plot(x, y)  # No dev.off() = trouble
```

**Fix:** Always close.

```r
dev.off()
```

#### 4. Case Sensitivity

**Problem:** `otu_data$abundance` fails if it’s `otu_data$Abundance`.  
**Fix:** Check names with `names(otu_data)`.

#### 5. Ignoring Warnings

**Problem:** Skipping warnings like “NAs introduced” hides issues.  
**Fix:** Read the console for yellow messages and investigate.

#### 6. Spaces in File Paths

**Problem:** Spaces break paths.

```r
read.csv("otu table.csv")  # Fails
```

**Fix:** Rename files (`otu_table.csv`) or quote paths.

#### 7. Missing Packages

**Problem:** `library(vegan)` fails if it’s not installed.  
**Fix:** Add a check.

```r
if (!require("vegan")) install.packages("vegan")
library(vegan)
```

#### 8. Ruining Raw Data

**Problem:** Editing raw data directly.

```r
otu_data$Abundance <- otu_data$Abundance * 2
```

**Fix:** Copy first.

```r
otu_data_clean <- otu_data
otu_data_clean$Abundance <- otu_data_clean$Abundance * 2
```

#### 9. Unreadable Code

**Problem:** Cramming too much into one line.

```r
x <- otu_data[otu_data$Abundance > 100 & !is.na(otu_data$Abundance), c(1, 3, 5)]
```

**Fix:** Break it up.

```r
high_abundance <- otu_data[otu_data$Abundance > 100 & !is.na(otu_data$Abundance), ]
selected_cols <- high_abundance[, c("SampleID", "OTU", "Abundance")]
```

#### 10. No Backups

**Fix:** Save versions (`script_v1.R`), use cloud storage, or email yourself.

---

### VI. Debugging 101: Fix Errors Like a Pro

Errors happen—here’s how to handle them:

#### 1. Read Error Messages

They point you to the problem.

**Example:**

```r
Error in mean(otu_data$Abudance) : object 'Abudance' not found
```

**Steps:**

- Check spelling (`Abundance` vs. `Abudance`).
- Confirm columns with `names(otu_data)`.

#### 2. Ultimate Debugging Trick

Add `print()` to peek inside:

```r
otu_data_clean <- otu_data[otu_data$Abundance > 0, ]
print(nrow(otu_data_clean))  # How many samples left?
```

#### 3. Isolate the Issue

- Copy the broken part to a new script.
- Simplify it (e.g., test with 5 rows).
- Run it to find the culprit.

**Tip:** Search errors on Stack Overflow or use `?function_name` for help.

---

### VII. Essential Shortcuts & Tools

#### 1. RStudio Shortcuts

- Ctrl+Enter: Run a line.
- Ctrl+Alt+R: Run the whole script.
- Ctrl+Shift+C: Comment/uncomment lines.
- Tab: Auto-complete names.

#### 2. Handy Functions

```r
View(otu_data)     # Spreadsheet view
str(otu_data)      # Data structure
summary(otu_data)  # Quick stats
dir()              # List files
getwd()            # Current directory
```

#### 3. Memory Management

```r
rm(temp_data)      # Remove one object
rm(list = ls())    # Clear everything (careful!)
gc()               # Free memory
```

---

### VIII. Reproducibility Checklist

**Before closing R:**

- Save scripts.
- Save workspace if needed:
  ```r
  save.image(here("final.RData"))
  ```
- Log your setup:
  ```r
  writeLines(capture.output(sessionInfo()), here("session_info.txt"))
  ```

**Before sharing:**

- Test in a fresh session (Ctrl+Shift+F10).
- Zip the project folder.
- Include `session_info.txt`.

---

### Final Tip: The 30-Second Rule

Ask yourself: “If I reopen this in 6 months, will I get it in 30 seconds?”  
Good organisation makes this a “yes”!

---

## Level Up: Pro Tips for Efficient R Coding and Organisation

_For Beginners Ready to Level Up_

This section is for users comfortable with R basics who want to work smarter, not harder. Learn pro techniques to write cleaner code, speed up tasks, and share your work effectively.

---

### I. Writing R Code Like a Pro

#### 1. Avoid the Global Environment Trap

**Problem:** Typing commands in the console loses them forever.  
**Fix:** Use scripts (`.R` files) and RStudio Projects (`.Rproj`):

```r
# File > New Project > New Directory
# Keeps files tidy and sets the working directory
```

#### 2. Meaningful Names & Snake Case

**Problem:** `x` or `df1` means nothing later.  
**Fix:** Use clear, snake_case names:

```r
soil_otu_table <- read_csv("soil_otu_table_2023.csv")  # Not `d`
```

#### 3. Comment Strategically

Explain why you’re doing something:

```r
# ---- Data Cleaning ----
# Remove samples with fewer than 1000 reads (low quality)
filtered_otu <- filter(soil_otu_table, TotalReads >= 1000)
```

#### 4. Functions Over Repeated Code

**Problem:** Copy-pasting code is error-prone.  
**Fix:** Write functions:

```r
calculate_shannon <- function(abundance_vector) {
  prop <- abundance_vector / sum(abundance_vector)
  -sum(prop * log(prop), na.rm = TRUE)
}
otu_data$Shannon <- apply(otu_data[, -1], 1, calculate_shannon)
```

#### 5. Never Hardcode Paths

**Problem:** Absolute paths fail on other machines.  
**Fix:** Use `here::here()`:

```r
library(here)
metadata <- read_csv(here("data", "metadata.csv"))
```

---

### II. Executing Code Efficiently

#### 1. Debugging Like a Detective

Pause and inspect with `browser()`:

```r
calculate_richness <- function(abundance) {
  browser()  # Stops here—explore variables
  sum(abundance > 0)
}
```

#### 2. Speed Up Code

- **Vectorise:** Skip loops for faster operations.
  ```r
  otu_data$RelativeAbundance <- otu_data$Abundance / sum(otu_data$Abundance)
  ```
- **Use data.table:** For big data:
  ```r
  library(data.table)
  setDT(otu_data)
  otu_data[, TotalAbundance := sum(Abundance), by = SampleID]
  ```

#### 3. Handle Memory Wisely

```r
rm(unused_otu_table)
gc()  # Garbage collection
```

---

### III. Changing Code Safely

#### 1. Version Control with Git

Track changes in RStudio:

> Project > Version Control > Git  
> Commit: Ctrl+Alt+M

**If you’re not ready for Git:**

- Save versions of scripts as `script_v1.R`, `script_v2.R`, etc.
- Use cloud storage or email yourself backups.

#### 2. Refactoring with Confidence

Test changes with `testthat`:

```r
library(testthat)
test_that("calculate_shannon works", {
  test_abund <- c(10, 20, 30)
  expect_equal(round(calculate_shannon(test_abund), 2), 1.01)
})
```

#### 3. Dependency Management

Use `renv` for package consistency:

```r
library(renv)
renv::init()
renv::snapshot()  # Save versions
```

---

### IV. Visualising Data Effectively

#### 1. ggplot2 Shortcuts

Define once, reuse:

```r
base_plot <- ggplot(otu_data, aes(x = SampleType, y = Shannon))
base_plot + geom_boxplot() + labs(title = "Shannon Diversity by Sample Type")
```

#### 2. Interactive Plots with plotly

Add interactivity:

```r
library(plotly)
static_plot <- ggplot(otu_data, aes(x = SampleType, y = Shannon)) + geom_boxplot()
ggplotly(static_plot)
```

#### 3. Colorblind-Friendly Palettes

Use `viridis`:

```r
library(viridis)
ggplot(otu_data, aes(x = SampleType, y = Shannon, fill = SampleType)) +
  geom_boxplot() +
  scale_fill_viridis(discrete = TRUE)
```

---

### V. Sharing & Reproducibility

#### 1. R Markdown/Quarto Reports

Mix code and text for reproducible reports:

````markdown
---
title: "Microbial Diversity Report"
output: html_document
---

```{r}
library(here)
otu_data <- read_csv(here("data", "otu_table.csv"))
summary_stats <- otu_data %>%
  group_by(SampleType) %>%
  summarise(mean_shannon = mean(Shannon, na.rm = TRUE))
print(summary_stats)
```
````

#### 2. Share Interactive Apps with Shiny

Quick app:

```r
library(shiny)
ui <- fluidPage(
  selectInput("sample_type", "Sample Type", unique(otu_data$SampleType)),
  plotOutput("shannon_plot")
)
server <- function(input, output) {
  output$shannon_plot <- renderPlot({
    otu_data %>%
      filter(SampleType == input$sample_type) %>%
      ggplot(aes(x = SampleID, y = Shannon)) +
      geom_bar(stat = "identity") +
      labs(title = paste("Shannon Diversity for", input$sample_type))
  })
}
shinyApp(ui, server)
```

#### 3. Reproducible Sessions

Log your setup:

```r
sessionInfo()  # R version, packages, etc.
```

---

### VI. Lesser-Known Life Savers

#### 1. Pipe Debugging

Break pipes with `browser()`:

```r
otu_data %>%
  filter(SampleType == "Soil") %T>%
  { browser() } %>%
  group_by(SampleID)
```

#### 2. Fast Row-Wise Operations

Use `purrr::pmap()`:

```r
library(purrr)
otu_data <- otu_data %>%
  mutate(ratio = pmap_dbl(list(Abundance, TotalReads), ~ ..1 / ..2))
```

#### 3. Secret Shortcuts

- Alt + -: Insert `<-`
- Ctrl + Shift + F10: Restart R

---

### VII. Final Checklist Before Sharing

- Remove absolute paths (use `here::here()`).
- Test in a fresh session (Ctrl+Shift+F10).
- Include `sessionInfo()`.

---

**Knowing this will make your life much easier!**

---

## FAQ & Troubleshooting

**Q: My script can’t find a file!**  
A: Make sure you’re using relative paths or the `here()` package, and that you’re working inside an RStudio Project.

**Q: I get “object not found” errors.**  
A: Check your spelling and run code step-by-step to see where things break.

**Q: How do I get help?**  
A: Use `?function_name` in R, or search your error message on Stack Overflow or RStudio Community.

---

**If you follow these practices, your R life will be much easier, your projects will be reproducible, and your future self will thank you!**
