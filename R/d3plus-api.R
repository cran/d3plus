#' @export
d3p_data <- function(d3p, data) {

  stopifnot(is.data.frame(data))

  d3p$x[["data"]] <- data

  d3p
}

#' @export
d3p_nodes <- function(d3p, nds) {

  stopifnot(is.data.frame(nds))

  d3p$x[["nodes"]] <- nds

  d3p
}

#' @export
d3p_links <- function(d3p, lnks) {

  stopifnot(is.data.frame(lnks))

  d3p$x[["links"]] <- lnks

  d3p
}

#' @export
d3p_type <- function(d3p, type = NULL) {

  d3p$x[["type"]] <- type

  d3p

}

#' @export
d3p_id <- function(d3p, variable = NULL) {

  d3p$x[["id"]] <- variable

  d3p

}

#' @export
d3p_x <- function(d3p, variable = NULL) {

  d3p$x[["x"]] <- variable

  d3p

}

#' @export
d3p_y <- function(d3p, variable = NULL) {

  d3p$x[["y"]] <- variable

  d3p

}
