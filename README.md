
<!-- README.md is generated from README.Rmd. Please edit that file -->
d3plus
======

`d3plus` is an R package for seamless R and D3Plus integration.

Installation
------------

You can install `d3plus` from Github with:

``` r
# install.packages("devtools")
devtools::install_github("pachamaltese/d3plus")
```

Example
-------

This is a basic example which shows you how to solve a common problem:

``` r
library(dplyr)
library(d3plus)

# examples taken from d3plus.org
dta <- tibble(id = c(rep("alpha",3),rep("beta",3)),
 x = c(4,5,6,4,5,6),
 y = c(7,25,13,7,8,13))

dta

d3plus() %>% 
  d3p_data(dta) %>% 
  d3p_type("line")

d3plus() %>% 
  d3p_data(dta) %>% 
  d3p_type("point")


dta2 <- tibble(id = c("alpha", "beta"), value = c(9, 20))
dta2

d3plus() %>% 
  d3p_data(dta2) %>% 
  d3p_type("treemap")

dta3 <- tibble(id = c("alpha", "alpha", "alpha", "beta", "beta", "beta"), 
               x = c(4,5,6,4,5,6),
               y = c(7,25,13,7,8,13))

d3plus() %>% 
  d3p_data(dta3) %>% 
  d3p_type("bar")

d3plus() %>% 
  d3p_data(dta3) %>% 
  d3p_type("hbar")
```
