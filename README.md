# Eloquent IFRS documentation

Hugo source of [the Eloquent IFRS documentation](https://ekmungai.github.io/ifrs-docs/).

This is the `source` branch. GitHub Pages serves the `master` branch of this repository from its root, so `master` holds only the built site, and anything committed there is published.

## Writing

Pages live in `content/`, with one folder per major version. Change the folder of the current version and leave older ones as they are. The worked examples in the sales cycle, purchase cycle and compound journals pages are covered by `tests/Feature/DocumentationExamplesTest.php` in the package, so change them in both places.

To start a new version, copy the latest folder, add it to the menu in `config.toml` and point `homepage_button_link` at it.

## API reference

The API reference is generated from a release tag by [Doctum](https://github.com/code-lts/doctum), into a `content/v<version>` folder. With the tag checked out in `../laravel-ifrs`, and `build_dir` in `doctum.php` set to the version:

```bash
php doctum.phar update doctum.php
```

Then point `content/v7docs/api.md` at the new folder.

## Publishing

Build with Hugo 0.104 extended, into a checkout of `master`:

```bash
git clone -b source https://github.com/ekmungai/ifrs-docs.git
git clone -b master https://github.com/ekmungai/ifrs-docs.git ifrs-docs-site
cd ifrs-docs
hugo --destination ../ifrs-docs-site
```

Then commit and push `ifrs-docs-site`. The generated API references are the `content/v2.0.1`, `v3.1.4`, `v4.1.0` and `v5.0.0` folders.

Do not clean the destination first or use `--cleanDestinationDir`: `master` holds older pages, such as `v2api`, that have no source here.
