import * as React from "react";
import Layout from "../layouts/layout";
import Cookies from "js-cookie";
import Alert from "react-bootstrap/Alert"

export default function Kalender() {
    const [showCalendar, setShowCalendar] = React.useState(false)

    React.useEffect(() => {
        getCalendarSetting()
    }, [])

    function getCalendarSetting() {
        setShowCalendar(JSON.parse(Cookies.get("settings"))["gcal"])
    }

    function handleSettingsChange() {
        getCalendarSetting()
    }

    return (
        <Layout onSettingsChange={() => handleSettingsChange()}>
            <div className="d-flex justify-content-center p-2">
                {showCalendar && <iframe
                    src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FBerlin&amp;src=dTFmZzZqdGprczlnNGRxb2VsMHRxc25ya2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZGUuZ2VybWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;color=%23F4511E&amp;title=Soli-Erlangen&amp;showTitle=0&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=1"
                    style={{borderWidth: 0}}
                    width="800"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    title="Soli Kalender"
                />
                }
                {!showCalendar && <Alert variant="danger">
                    <p>Um die Termine zu sehen, musst du den Google Kalender aktivieren.</p>
                    <p>Das kannst du rechts unten mit einem Klick auf "Einstellungen" machen.</p>
                    <br/>
                    <p>Wenn du nicht möchtest, dass Google Cookies speichert, dann kannst du diese Seite auch in einem
                        privaten Fenster öffnen, oder den Cookie selbst wieder löschen.</p>
                </Alert>}
            </div>
        </Layout>
    );
}
