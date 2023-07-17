// import local components
import Block from "./components/Block";
import Block2 from "./components/Block2";
import tabs from "./components/tabs";
import container from "./components/container";
import PageHeader from "./components/PageHeader";
// Import the express library
import * as expressModule from "@uniwebcms/express"; // See README for more details: https://github.com/uniwebcms/express/blob/main/README.md
// import CSS
import "./index.css";

export default { ...expressModule, Block, Block2, tabs, container, PageHeader };
