terraform {
  backend "remote" {
    hostname     = "app.terraform.io"
    organization = "udondan"
    workspaces {
      name = "udondan_com"
    }
  }
}
