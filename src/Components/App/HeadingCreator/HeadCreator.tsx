import { FlowersAbout } from "../../WeddingComponents/FlowersTemplate/FlowersAbout"
import { FlowersAccomodation } from "../../WeddingComponents/FlowersTemplate/FlowersAccomodation"
import { FlowersContact } from "../../WeddingComponents/FlowersTemplate/FlowersContact"
import { FlowersHeader } from "../../WeddingComponents/FlowersTemplate/FlowersHeader"
import { FlowersNav } from "../../WeddingComponents/FlowersTemplate/FlowersNav"
import { WeddingPartyTime } from "../../WeddingComponents/FlowersTemplate/FlowersWeddingParty"
import { FlowersWitnesses } from "../../WeddingComponents/FlowersTemplate/FlowersWitnesses"



export const HeadingCreator = () => {
    return(
        <section className="setup heading-creator">
            <div className="heading-creator creator-setup">
                setup
            </div>
            <div className="result">
                <>
                <FlowersNav/>
                <FlowersHeader/>
                <FlowersAbout/>
                <WeddingPartyTime/>
                <FlowersAccomodation/>
                <FlowersWitnesses/>
                <FlowersContact/>
                </>
            </div>
        </section>
    )
}