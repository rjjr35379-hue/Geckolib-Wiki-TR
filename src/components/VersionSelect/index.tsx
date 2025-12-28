import type {ReactNode} from 'react';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

type Version = {
    mcVersion: string;
    modVersion: string;
}

// Master version list
const Versions: Version[] = [
    {mcVersion: "1.21.11", modVersion: "5"},
    {mcVersion: "1.21.10", modVersion: "5"},
    {mcVersion: "1.21.8", modVersion: "5"},
    {mcVersion: "1.21.7", modVersion: "5"},
    {mcVersion: "1.21.6", modVersion: "5"},
    {mcVersion: "1.21.5", modVersion: "5"},
    {mcVersion: "1.21.4", modVersion: "4"},
    {mcVersion: "1.21.3", modVersion: "4"},
    {mcVersion: "1.21.1", modVersion: "4"},
    {mcVersion: "1.21", modVersion: "4"},
    {mcVersion: "1.20.6", modVersion: "4"},
    {mcVersion: "1.20.5", modVersion: "4"},
    {mcVersion: "1.20.4", modVersion: "4"},
    {mcVersion: "1.20.3", modVersion: "4"},
    {mcVersion: "1.20.2", modVersion: "4"},
    {mcVersion: "1.20.1", modVersion: "4"},
    {mcVersion: "1.20", modVersion: "4"},
    {mcVersion: "1.19.4", modVersion: "4"},
    {mcVersion: "1.19.3", modVersion: "4"},
    {mcVersion: "1.19.2", modVersion: "3"},
    {mcVersion: "1.19.1", modVersion: "3"},
    {mcVersion: "1.19", modVersion: "3"},
    {mcVersion: "1.18.2", modVersion: "3"},
    {mcVersion: "1.18.1", modVersion: "3"},
    {mcVersion: "1.18", modVersion: "3"},
    {mcVersion: "1.17.1", modVersion: "3"},
    {mcVersion: "1.16.5", modVersion: "3"},
    {mcVersion: "1.16.4", modVersion: "3"},
    {mcVersion: "1.16.3", modVersion: "3"},
    {mcVersion: "1.16.2", modVersion: "3"},
    {mcVersion: "1.16.1", modVersion: "3"},
    {mcVersion: "1.15.2", modVersion: "3"},
    {mcVersion: "1.12.2", modVersion: "3"},
]

function VersionOption({mcVersion, modVersion}: Version) {
  return (<Link to={'docs/geckolib' + modVersion}>Minecraft {mcVersion}</Link>)
}

function filterVersions() {
  let input = document.getElementById("versionSearchBox");
  let filter = input["value"].toUpperCase();
  let div = document.getElementById("dropdownList");
  let a = div.getElementsByTagName("a");

  for (let i = 0; i < a.length; i++) {
    const txtValue = a[i].textContent || a[i].innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function toggleDropdown() {
  document.getElementById("dropdownList").classList.toggle("forceVisible");
  document.getElementById("dropdownList").classList.remove("visible");
}

function showVersionList() {
  document.getElementById("dropdownList").classList.add("visible");
}

function tryHideVersionList() {
  if (document.getElementById("versionSearchBox") != document.activeElement)
    document.getElementById("dropdownList").classList.remove("visible");
}

export default function VersionSelect(): ReactNode {
  return (
    <section className={styles.versionSelectRegion}>
      <div className="container">
        <div className="row">
          <div className={styles.dropdown} onMouseLeave={tryHideVersionList}>
            <button onMouseOver={showVersionList} onClick={toggleDropdown} className={styles.dropdownButton}>Select Minecraft Version</button>
            <div id="dropdownList" className={styles.dropdownList}>
              <input type="text" placeholder="Search..." id="versionSearchBox" onKeyUp={filterVersions} onBlur={tryHideVersionList}/>
              {Versions.map((version, index) => (
                <VersionOption key={index} {...version} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}