import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <p className="text-sm font-medium leading-none sm:py-2 sm:mt-0 mt-4">
        A JS Mastery project. Made with ❤️ by{" "}
        <a
          href="https://github.com/sohomofficial"
          className="font-bold hover:underline underline-offset-4"
        >
          Sohom Mondal
        </a>
      </p>
      <span className="inline-flex gap-4 sm:ml-auto sm:mt-0 mt-4 items-center justify-center sm:justify-start">
        <span className="text-sm font-medium leading-none">
          Give it a ⭐ on
        </span>
        <a href="https://github.com/sohomofficial/imaginify">
          <Button size={"icon"}>
            <Github className="h-6 w-6" />
          </Button>
        </a>
      </span>
    </footer>
  );
}
