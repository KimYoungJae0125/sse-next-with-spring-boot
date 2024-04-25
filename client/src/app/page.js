import Image from "next/image";
import styles from "./page.module.css";
import {Display} from "../components/display/display";
import {SendInput} from "../components/input/send";

export default function Home() {
  return (
    <main className={styles.main}>
      <Display />
      <SendInput />
    </main>
  );
}
