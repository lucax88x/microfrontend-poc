import { execa } from "execa";
import { run } from "./shared.mts";

await run(
	"certs",
	() =>
		execa`openssl req -new -x509 -newkey rsa:2048 -sha256 -nodes -keyout ./infra/certs/localhost.key -days 360 -out ./infra/certs/localhost.crt -config ./infra/certs/certificate.cnf`,
);
