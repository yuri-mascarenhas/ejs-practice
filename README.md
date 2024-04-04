# EJS Templating practice

This project is a simple practice for templating pages using the [EJS](https://ejs.co/) module. It consists of a number of pages with a overall layout and it's own particular informations.

## Important to remember

- EJS will look at the _views_ page, in the _cwd_ by default
- When using syntax interpolation, avoid, whenever possible, the use of logic in the .ejs file
- When using the _import_ syntax over the _require_ you have to extract the directory name "by hand":

```python
import { fileURLToPath } from "url";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```
