import * as fs from 'node:fs';
import path from 'node:path';
import dotenv from 'dotenv';

dotenv.config();

const fileName = 'vault_config.json';
const filePath = path.join(__dirname, fileName);

const replaceMaskedValues = (configPath: string) => {
  const configContent = fs.readFileSync(configPath, 'utf-8');

  const replaced = configContent.replace(
    /\{\{([^}]+)\}\}/g,
    (_, envVar) => {
      const value = process.env[envVar.trim()];

      if (!value) throw new Error(`[NOT FOUND]: Environment variable === ${envVar}`);

      return value;
    },
  );

  return JSON.parse(replaced);
};

const config: unknown = replaceMaskedValues(filePath);

console.log(JSON.stringify(config, null, ' '));
