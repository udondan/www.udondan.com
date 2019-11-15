SHELL := /bin/bash

serve:
	@cd hugo && hugo server -w

init:
	@cd terraform && terraform init

plan:
	@cd terraform && terraform plan

validate:
	@cd terraform && terraform validate

.pre-commit:
	@git diff --cached --name-only --diff-filter=ACM -z -- '*.tf' '*.tfvars' | xargs -L1 terraform fmt -check=true -diff=true -write=false -list=true
	@git diff --cached --name-only --diff-filter=ACM -z | xargs -L1 bash -c 'if test "$$(tail -c 1 "$$0")"; then echo "No new line at end of $$0"; exit 1; fi'

pre-commit-install:
	@echo make .pre-commit > .git/hooks/pre-commit
	@chmod +x .git/hooks/pre-commit

fmt-check:
	@terraform fmt -check=true -diff=true -write=false -list=true -recursive terraform

fmt:
	@terraform fmt -recursive terraform
