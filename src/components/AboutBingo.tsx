import React from "react";
import { isBingoVersion, latestBingoVersion } from "oot-bingo-lists";

const urlVersion = new URLSearchParams(window.location.search).get("version") ?? "";
const version = isBingoVersion(urlVersion) ? urlVersion : latestBingoVersion;

function AboutBingo() {
  return (
    <div id="about_bingo">
      <h1>Ocarina of Time Bingo</h1>
      <div id="newcards" />
      <div style={{ clear: "both" }}>
        <div style={{ marginTop: "16px" }}>
          <a className="newcard" href={`?version=${version}&mode=blackout`}>
            Blackout
          </a>
          <a className="newcard" href={`?version=${version}&mode=short-blackout`}>
            Short Blackout
          </a>
        </div>
        <div style={{ clear: "both" }} />

        <h2>About</h2>

        <p>This is exploration bingo.</p>
        <p>
          You start with two goals. Completing a goal reveals the adjacent goals (north, west,
          south, east).
        </p>
        <p>Do not click a goal before completing it!</p>
        <p>
          To win, complete an <em>x</em> amount of goals determined beforehand (e.g. 15 goals).
        </p>
        <h2>General Bingo rules</h2>
        <ul>
          <li>
            Banned Tricks for Bingo: "Using Deku Stick as Adult", "Get Item Manipulation (GIM)",
            "Using Bombchus Out of Bounds", "Obtaining the Eyeball Frog without presenting the
            Prescription", "Jumpslash Quick Putaway", "Stale Reference Manipulation (SRM)", and all
            forms of Arbitrary Code Execution.
          </li>
          <li>
            Item specific explanations:
            <br />
            "At least 1 skulltula from each dungeon": Only dungeons with blue warps are required.
            <br />
            "X Songs": Scarecrow's Song does not count.
            <br />
            "Frog's HP": You only need to get one of the frog's HPs.
            <br />
            "5 Zora Area HPs": Ice Cavern and Jabu Jabu does not count. <br />
            "X Deku Sticks / Deku Nuts / Beans": Item must display visually in inventory to count.
            <br />
            "X Boss Keys": Boss keys for child dungeons obtained through RBA count.
            <br />
            "X Hearts (No Duping)": Using RBA to write Heart Pieces into the inventory does not
            count as duping and is allowed.
          </li>
          <li>
            If it says to have an item, you must actually keep it. For example, if it says to have
            "Blue Potion," you must not drink it, and you must still have it in your inventory at
            the time you finishgetting all 5 objectives.
          </li>
          <li>
            When an item may be marked as completed: <br />
            Song: When the text says "You have learned the..." <br />
            Item: When you are holding it above your head. <br />
            Beat Dungeon: When you step in the blue warp. <br />
            Beat a Boss/Enemy: When you strike the last blow. <br />
            If Wrong Warping, any items or goals associated with the wrong warp are obtained upo
            completion of the Wrong Warp.
          </li>
          <li>
            For collection goals such as "8 hearts", "5 songs", "3 unused keys", etc, you are
            allowed to exceed the required amount.
          </li>
        </ul>
        <p className="note">
          EXPLORATION BINGO: Originally created by Gombill. Redesigned by xwillmarktheplace.
          <br />
          GENERATOR: Originally written and designed by Narcissa. Improved by Giuocob. v9 redesign
          by Saltor. Frequency Balancing by prettybigjoe. <br />
          GOAL LIST: Original goal list by Narcissa. v9.3 data collection and coordination by
          Gombill. Goal timing and data collection by Exodus, tob3000, Runnerguy2489, Tasselhoff,
          juwk, shaggy, and others in the community.
        </p>
      </div>
    </div>
  );
}

export default AboutBingo;
