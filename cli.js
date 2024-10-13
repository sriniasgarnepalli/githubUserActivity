import axios from "axios";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

async function fetchData(apiUrl) {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.log(`${error.message} - error`);
    process.exit(1);
  }
}

async function validUser(username) {
  try {
    const getUserDetails = `https://api.github.com/users/${username}`;
    const validateUser = await axios.get(getUserDetails);
    const profileName = validateUser.data.name;
    if (profileName) {
      return true;
    } else {
      console.log(`User with User name: ${username} doesn't exist`);
      process.exit(1);
    }
  } catch (error) {
    console.log(`Provided User name: ${username} is invalid`);
    process.exit(1);
  }
}

async function main() {
  const argv = yargs(hideBin(process.argv))
    .option("user", {
      alias: "u",
      type: "string",
      demandOption: true,
      description: "GitHub username to fetch activity for"
    })
    .help().argv;

  //   const args = process.argv.slice(2);

  const username = argv.user;
  const apiUrl = `https://api.github.com/users/${username}/events`;

  const newData = await validUser(username);
  const data = await fetchData(apiUrl);

  if (data.length === 0) {
    console.log(`No recent activity found for user: ${username}`);
    return;
  }

  console.log(`Recent activity for ${username}:\n`);
  data.forEach((activity, index) => {
    const date = new Date(activity.created_at);
    const action = activity.type;
    const repo = activity.repo.name;

    console.log(
      `${index + 1}. ${action} at ${repo} on ${date.toLocaleString()}`
    );
  });
}

main();
