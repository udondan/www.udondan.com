module "s3-cloudfront-page" {
  source       = "udondan/s3-cloudfront-page/aws"
  version      = "0.3.0"
  domain_name  = "www.udondan.com"
  root         = "${path.module}/../public"
  filter_paths = ".*/font-awesome/(sprites|svgs|metadata)/.*"
}

output "cloudfront" {
  value = module.s3-cloudfront-page.cloudfront
}
