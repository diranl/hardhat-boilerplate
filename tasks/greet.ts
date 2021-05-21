import { task, HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";

task("greet", "Calls greet on the Greeter contract")
  .addParam("address", "The contract's address")
  .setAction(async (args, hre) => {
    const greeterAddress = args.address;
    const greeterArtifact = await hre.artifacts.readArtifact("Greeter");
    const greeterAbi = greeterArtifact.abi;
    const greeterContract = new hre.ethers.Contract(
      greeterAddress,
      greeterAbi,
      hre.ethers.provider
    );
    const greeterMessage = await greeterContract.greet();
    console.log("greeter message:", greeterMessage);
  });

task("setGreeting", "Sets the greeting message on the Greeter contract")
  .addParam("address", "The contract's address")
  .addParam("message", "The message to be set")
  .setAction(async (args, hre) => {
    const greeterAddress = args.address;
    const greeterArtifact = await hre.artifacts.readArtifact("Greeter");
    const greeterAbi = greeterArtifact.abi;
    const signers = await hre.ethers.getSigners();
    const greeterContract = new hre.ethers.Contract(
      greeterAddress,
      greeterAbi,
      signers[0]
    );
    console.log("current greeter message:", await greeterContract.greet());
    console.log("setting new greeter message...");
    await greeterContract.setGreeting(args.message);
    console.log("new greeter message:", await greeterContract.greet());
  });
