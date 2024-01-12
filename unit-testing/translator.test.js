import {translatorFunction} from "../scripts/translatorFunction.js";

describe("translatorFunction", () => {
  it("Should return valid Morse from English", () => {
    expect(translatorFunction("Hello")).toBe(".... . .-.. .-.. ---");
    expect(translatorFunction("Hello World")).toBe(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
    );
    expect(translatorFunction("This is a lot of spaces to test")).toBe(
      "- .... .. ... / .. ... / .- / .-.. --- - / --- ..-. / ... .--. .- -.-. . ... / - --- / - . ... -"
    );
  });
  it("Should return valid English from Morse", () => {
    expect(translatorFunction(".... . .-.. .-.. ---")).toBe("HELLO");
    expect(
      translatorFunction(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")
    ).toBe("HELLO WORLD");
    expect(
      translatorFunction(
        "- .... .. ... / .. ... / .- / .-.. --- - / --- ..-. / ... .--. .- -.-. . ... / - --- / - . ... -"
      )
    ).toBe("THIS IS A LOT OF SPACES TO TEST");
  });
  it("Should return Invalid Start Input if starting character is invalid morse", () => {
    expect(translatorFunction("{")).toBe("Invalid Start Input");
    expect(translatorFunction("*")).toBe("Invalid Start Input");
  });
  it("Should return Invalid Character if English contains invalid Morse characters", () => {
    expect(translatorFunction("Hello*")).toBe("Invalid Character");
    expect(translatorFunction("Hello{")).toBe("Invalid Character");
  });
  it("Should return Invalid Morse Code if Morse contains something other than . - /", () => {
    expect(translatorFunction(".... . a .-.. .-.. ")).toBe(
      "Invalid Morse Code"
    );
    expect(translatorFunction(".... . .-.. 0.-.. ")).toBe("Invalid Morse Code");
    expect(translatorFunction(".... . .-.. .-.. *")).toBe("Invalid Morse Code");
  });
});
// return errors instead of strings, using try catch and error.message
