import { exec } from "child_process";

function runPrismaGenerate() {
  exec("npx prisma generate", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }

    console.log(`stdout: ${stdout}`);
  });
}

function main() {
  console.log("Starting to run `npx prisma generate` every second...");
  setInterval(runPrismaGenerate, 2000); // 2초마다 실행
}

main();
