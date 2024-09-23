import { argv, write } from "bun";
import path from "path";
import { styleText } from "util";

const projectPath = path.resolve(argv[2]);
const fileName = projectPath.split(path.sep).pop();
write(
  path.join(projectPath, `${fileName}.tsx`),
  `
import styles from "./${fileName}.module.scss";
export default function ${fileName}() {
  return (
    <div>${fileName}</div>
  );
}
`,
  { createPath: true }
)
  .then(() => {
    console.log(styleText("greenBright", `✅ 🎉 Successfully created ${fileName}.tsx`));
  })
  .catch(() => {
    console.log(styleText("redBright", `❌ 😭 Failed to create ${fileName}.tsx`));
  });
write(path.join(projectPath, `${fileName}.module.scss`), "", { createPath: true })
  .then(() => {
    console.log(styleText("greenBright", `✅ 🎉 Successfully created ${fileName}.scss`));
  })
  .catch(() => {
    console.log(styleText("redBright", `❌ 😭 Failed to create ${fileName}.scss`));
  });
