#!/usr/bin/env zx

import { $, cd, echo } from "zx";

$`cp package.json dist`;
$`cp README.md dist`;
$`cp CHANGELOG.md dist`;
cd("dist");
echo("Start publishing...");
$`npm publish`;
echo("Published!");
