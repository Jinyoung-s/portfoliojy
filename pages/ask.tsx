import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import Terminal, {
  ColorMode,
  TerminalOutput,
  TerminalInput,
} from "react-terminal-ui";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Ask = () => {
  const router = useRouter();

  useEffect(() => {}, []);

  const getMsg = async (question: string) => {
    const res = await axios.get(
      publicRuntimeConfig.SERVER_URL + "/" + question
    );
    console.log(res.data);
    return res.data;
  };

  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key={getKey()}>
      'exit' will exit the terminal.
    </TerminalOutput>,
    <TerminalOutput key={getKey()}>
      'clear' will clear the terminal.
    </TerminalOutput>,
    <TerminalOutput key={getKey()}>'ls' will show directory.</TerminalOutput>,
    <TerminalOutput key={getKey()}>
      Hi I am Jay(Jinyoung) So. Ask AI anything.
    </TerminalOutput>,
    <TerminalOutput key={getKey()}>
      - There is no guarantee that the answer is true ^^.
    </TerminalOutput>,
  ]);

  function getKey() {
    return (
      "key-" + (Math.random().toString(36) + "00000000000000000").slice(2, 7)
    );
  }

  useEffect(() => {}, []);

  async function onInput(input: string) {
    let ld = [...terminalLineData];
    console.log("key::" + getKey());
    ld.push(<TerminalInput key={getKey()}>{input}</TerminalInput>);

    if (input.toLocaleLowerCase().trim() === "exit") {
      router.push("/");
    } else if (input.toLocaleLowerCase().trim() === "help") {
      ld.push(
        <TerminalOutput key={getKey()}>exit - exit the terminal</TerminalOutput>
      );
      ld.push(
        <TerminalOutput key={getKey()}>
          clear - clear the terminal
        </TerminalOutput>
      );
      ld.push(
        <TerminalOutput key={getKey()}>ls - show directory list</TerminalOutput>
      );
    } else if (input.toLocaleLowerCase().trim() === "clear") {
      ld = [];
    } else if (
      input.toLocaleLowerCase().trim() === "ls" ||
      input.toLocaleLowerCase().trim() === "ll"
    ) {
      ld.push(
        <TerminalOutput key={getKey()}>
          -- type "cd [directory name]"
        </TerminalOutput>
      );

      ld.push(<TerminalOutput key={getKey()}></TerminalOutput>);

      ld.push(
        <TerminalOutput key={getKey()}>drwxrwxr-x histoy</TerminalOutput>
      );
      ld.push(
        <TerminalOutput key={getKey()}>drwxrwxr-x education</TerminalOutput>
      );
      ld.push(
        <TerminalOutput key={getKey()}>drwxrwxr-x project</TerminalOutput>
      );
      ld.push(
        <TerminalOutput key={getKey()}>drwxrwxr-x contact</TerminalOutput>
      );
    } else if (input.toLocaleLowerCase().trim() === "cd history") {
      router.push("/#history");
    } else if (input.toLocaleLowerCase().trim() === "cd eucation") {
      router.push("/#educations");
    } else if (input.toLocaleLowerCase().trim() === "cd project") {
      router.push("/#projects");
    } else if (input.toLocaleLowerCase().trim() === "cd contact") {
      router.push("/#contact");
    } else if (input) {
      let rtnData = await getMsg(input);
      ld.push(<TerminalOutput key={getKey()}>{rtnData}</TerminalOutput>);
    }
    setTerminalLineData(ld);
  }

  return (
    <div className="w-full flex justify-center h-[100vh] break-all overflow-hidden">
      <Terminal
        name=""
        height="100%"
        colorMode={ColorMode.Dark}
        onInput={onInput}
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
};

export default Ask;
