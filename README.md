# Source for my CV @ http://www.udondan.com/

My little overengineered static single page.

- Source files are located in `/hugo`
- HTML page is build via [Hugo] in a [GitHub action](https://github.com/udondan/www.udondan.com/blob/master/.github/workflows/main.yml#L25-L26)
- PDF version is generated via [GoogleChrome/puppeteer] in a [GitHub action](https://github.com/udondan/www.udondan.com/blob/master/.github/workflows/main.yml#L28-L34)
- `/public` folder is synced to S3 via Terraform module [udondan/s3-cloudfront-page/aws]
- Terraform plan/apply is triggered automtically in [Terraform Cloud].

[hugo]: https://gohugo.io/
[googlechrome/puppeteer]: https://github.com/GoogleChrome/puppeteer
[udondan/s3-cloudfront-page/aws]: https://registry.terraform.io/modules/udondan/s3-cloudfront-page/aws
[terraform cloud]: https://www.terraform.io/docs/cloud/
