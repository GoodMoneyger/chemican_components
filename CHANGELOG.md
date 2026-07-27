# Changelog

## [1.6.0](https://github.com/GoodMoneyger/chemican_components/compare/v1.5.0...v1.6.0) (2026-07-27)

### Features

* **Breadcrumbs:** Add linkComponent prop for custom link rendering ([51b24da](https://github.com/GoodMoneyger/chemican_components/commit/51b24daf1ef7f04bc910031916980233c6fc9c72))
* **Tag:** Add asChild prop to render tags as links ([209fc96](https://github.com/GoodMoneyger/chemican_components/commit/209fc968fd22533289b4624228f226e273664a99))

### Bug Fixes

* **FileUploader:** [V2QA-283] Correct layout and dropzone ([#155](https://github.com/GoodMoneyger/chemican_components/issues/155)) ([4ff93a5](https://github.com/GoodMoneyger/chemican_components/commit/4ff93a5e1f2ef376836a0b666819cf0106241b7f))
* **MultiSelect:** Show no-options message instead of select-all when empty ([45eb68d](https://github.com/GoodMoneyger/chemican_components/commit/45eb68d0f570b495e08440f7f022f7b75680caac))

### Refactoring

* **Breadcrumbs:** Replace linkComponent with per-item asChild ([2cf786c](https://github.com/GoodMoneyger/chemican_components/commit/2cf786c4dc7981701dfe3914d6b3652d442548e3))
* **Dialog:** [V2QA-258] Make it it fit the viewport height ([#158](https://github.com/GoodMoneyger/chemican_components/issues/158)) ([9a71836](https://github.com/GoodMoneyger/chemican_components/commit/9a71836fccc6a1ccfe22e0451daf2729bb6c435a))

### Build

* **deps:** bump fast-uri from 3.1.2 to 3.1.4 ([6514f12](https://github.com/GoodMoneyger/chemican_components/commit/6514f12452da586668458863565bb79cce493fdb))
* **deps:** bump lodash, @figma/code-connect and @microsoft/api-extractor ([d844d66](https://github.com/GoodMoneyger/chemican_components/commit/d844d6630bb73bf8622a93915bce7b5c0c803d9e))
* **deps:** bump tar from 7.5.16 to 7.5.20 ([0590b9a](https://github.com/GoodMoneyger/chemican_components/commit/0590b9ae3320db494a9d8a1193984bb167ae30d8))
* **deps:** bump undici and release-it ([7210e46](https://github.com/GoodMoneyger/chemican_components/commit/7210e467857a0dc90538ba6dd09253b7269db45e))

## [1.5.0](https://github.com/GoodMoneyger/chemican_components/compare/v1.3.0...v1.5.0) (2026-07-21)

### Features

* **dev:** Add global theme switcher to Storybook toolbar ([023a6dd](https://github.com/GoodMoneyger/chemican_components/commit/023a6dd280c214c9fca2fbdea929d634cc7ad384))
* **multiselect:** Add maxDisplayedOptions to truncate long lists ([#141](https://github.com/GoodMoneyger/chemican_components/issues/141)) ([a7aed78](https://github.com/GoodMoneyger/chemican_components/commit/a7aed78e1ea39d4bd1b90eb482b1b999a0b6438e))
* **Select:** Add fullWidthOptions props ([#142](https://github.com/GoodMoneyger/chemican_components/issues/142)) ([62389ce](https://github.com/GoodMoneyger/chemican_components/commit/62389ce32942c5b04d6fa57d9ae7296434c102b8))

### Bug Fixes

* **Datepicker:** Correct package version ([008547f](https://github.com/GoodMoneyger/chemican_components/commit/008547fa1ad3c8feea800487bac8ff65ade29433))
* **Datepicker:** Have the minDate and maxDate define the year boundaries ([#150](https://github.com/GoodMoneyger/chemican_components/issues/150)) ([9cb5548](https://github.com/GoodMoneyger/chemican_components/commit/9cb5548071640f09cf29685f73f3f1870051dd6d))
* **multiple:** Replace hardcoded green tokens with semantic theme-aware tokens ([6b383f0](https://github.com/GoodMoneyger/chemican_components/commit/6b383f091e9739721a26cab67b1d0545f8347c0e))
* **Switch:** Make thumb visible in disabled unchecked state ([7c79b5f](https://github.com/GoodMoneyger/chemican_components/commit/7c79b5fbac6777175b0d478eff2aa8c19ffbc705))
* **Table:** Add proper z-index for table header stickiness ([#148](https://github.com/GoodMoneyger/chemican_components/issues/148)) ([eab021a](https://github.com/GoodMoneyger/chemican_components/commit/eab021a3aef681d0c762576299ee64e83d019648))

### Build

* **deps-dev:** bump js-yaml from 4.1.1 to 4.2.0 ([0d1ddc9](https://github.com/GoodMoneyger/chemican_components/commit/0d1ddc963206a40835871f9eff14d9a7e044c021))
* **deps:** bump form-data from 4.0.4 to 4.0.6 ([76f01a7](https://github.com/GoodMoneyger/chemican_components/commit/76f01a7ff14b808960a1f7423f2744702f50e6b9))
* **deps:** bump tar from 7.5.11 to 7.5.16 ([d47bb46](https://github.com/GoodMoneyger/chemican_components/commit/d47bb46fe5fb548e3cbc06d3d714602dd2f26b15))
* **deps:** bump ws from 8.20.1 to 8.21.0 ([f3c3c41](https://github.com/GoodMoneyger/chemican_components/commit/f3c3c41005ef7b79d965aaf666a09d84657c314e))

## [1.3.0](https://github.com/GoodMoneyger/chemican_components/compare/v1.2.0...v1.3.0) (2026-05-27)

### Features

* **Icon:** Add custom resize-icon ([#138](https://github.com/GoodMoneyger/chemican_components/issues/138)) ([69b6c4c](https://github.com/GoodMoneyger/chemican_components/commit/69b6c4c1c9821ac635c1d01aa715f605be15b159))

## [1.2.0](https://github.com/GoodMoneyger/chemican_components/compare/v1.1.0...v1.2.0) (2026-05-25)

### Features

* **select:** Add search bar for selects with many options ([8f6bb91](https://github.com/GoodMoneyger/chemican_components/commit/8f6bb91ca890d11c561e918abad8cecdbe2b99f5))

### Bug Fixes

* **multiple:** Improve content overflow handling in dropdown components ([6b6adb6](https://github.com/GoodMoneyger/chemican_components/commit/6b6adb63602a5456c11f126b4fee975718a5755f))
* **select:** Hide filtered options via className and add searchThreshold prop ([49a29f1](https://github.com/GoodMoneyger/chemican_components/commit/49a29f1c2f129522b5dcb8ce10a459214906abee))

## [1.1.0](https://github.com/GoodMoneyger/chemican_components/compare/v1.0.0...v1.1.0) (2026-05-20)

### Features

* **SegmentedControl:** Create a new component ([#135](https://github.com/GoodMoneyger/chemican_components/issues/135)) ([05bdc51](https://github.com/GoodMoneyger/chemican_components/commit/05bdc5124bdfb19b2e8ea6d4250d402c9b57b7c1))

### Build

* **deps:** bump brace-expansion from 5.0.5 to 5.0.6 ([99972a2](https://github.com/GoodMoneyger/chemican_components/commit/99972a2670211185999d5cc22902fcc48586f75c))
* **deps:** bump ws from 8.18.3 to 8.20.1 ([6e427db](https://github.com/GoodMoneyger/chemican_components/commit/6e427db5bd3f19235e1dd5badacc369fc684af43))
