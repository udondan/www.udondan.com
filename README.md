# Source for my CV @ http://www.udondan.com

My little overengineered static single page.

- Source files are located in `/hugo`
- HTML page is build via [Hugo] in a [GitHub action](https://github.com/udondan/www.udondan.com/blob/master/.github/workflows/main.yml#L25-L26)
- PDF version is generated via [GoogleChrome/puppeteer] in a [GitHub action](https://github.com/udondan/www.udondan.com/blob/master/.github/workflows/main.yml#L28-L34)
- `/public` folder is synced to S3 via Terraform module [udondan/s3-cloudfront-page/aws]
- Terraform plan/apply is triggered automtically in [Terraform Cloud].
- The Hugo Theme is based on [Orbit], originally desgined by Xiaoying Riley. Just in case you want to fork this repo to build your own résumé: You'll either need to purchase a commercial license or add an attribution link in the footer: https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/


[Hugo]: https://gohugo.io/
[GoogleChrome/puppeteer]: https://github.com/GoogleChrome/puppeteer
[udondan/s3-cloudfront-page/aws]: https://registry.terraform.io/modules/udondan/s3-cloudfront-page/aws
[Terraform Cloud]: https://www.terraform.io/docs/cloud/
[Orbit]: https://github.com/aerohub/hugo-orbit-theme
