import * as React from "react";

export default function Calendar() {
  return (
    <div>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FBerlin&amp;src=dTFmZzZqdGprczlnNGRxb2VsMHRxc25ya2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZGUuZ2VybWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;color=%23F4511E&amp;title=Soli-Erlangen&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=1"
        style={{borderWidth:0}}
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
        title="Soli Kalender"
      />
    </div>
  );
}
