import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SmartContract } from "../target/types/smart_contract";

describe("smart-contract", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SmartContract as Program<SmartContract>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
