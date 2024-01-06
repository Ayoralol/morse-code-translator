import {testTranslatorFunction} from "./translator-testing.js";

describe("translatorFunction", () => {
  it("Should return valid Morse from English", () => {
    expect(testTranslatorFunction("Hello")).toBe(".... . .-.. .-.. ---");
    expect(testTranslatorFunction("Hello World")).toBe(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
    );
    expect(testTranslatorFunction("This is a lot of spaces to test")).toBe(
      "- .... .. ... / .. ... / .- / .-.. --- - / --- ..-. / ... .--. .- -.-. . ... / - --- / - . ... -"
    );
  });
  it("Should return valid English from Morse", () => {
    expect(testTranslatorFunction(".... . .-.. .-.. ---")).toBe("HELLO");
    expect(
      testTranslatorFunction(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")
    ).toBe("HELLO WORLD");
    expect(
      testTranslatorFunction(
        "- .... .. ... / .. ... / .- / .-.. --- - / --- ..-. / ... .--. .- -.-. . ... / - --- / - . ... -"
      )
    ).toBe("THIS IS A LOT OF SPACES TO TEST");
  });
  it("Should return Invalid Start Input if starting character is invalid morse", () => {
    expect(testTranslatorFunction("{")).toBe("Invalid Start Input");
    expect(testTranslatorFunction("*")).toBe("Invalid Start Input");
  });
  it("Should return Invalid Character if English contains invalid Morse characters", () => {
    expect(testTranslatorFunction("Hello*")).toBe("Invalid Character");
    expect(testTranslatorFunction("Hello{")).toBe("Invalid Character");
  });
  it("Should return Invalid Morse Code if Morse contains something other than . - /", () => {
    expect(testTranslatorFunction(".... . a .-.. .-.. ")).toBe(
      "Invalid Morse Code"
    );
    expect(testTranslatorFunction(".... . .-.. 0.-.. ")).toBe(
      "Invalid Morse Code"
    );
    expect(testTranslatorFunction(".... . .-.. .-.. *")).toBe(
      "Invalid Morse Code"
    );
  });
});
