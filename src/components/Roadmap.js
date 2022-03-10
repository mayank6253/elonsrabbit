import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {GiMissileLauncher, GiRocketFlight, GiPoliceBadge, GiMetalBoot} from 'react-icons/gi'

export default function Roadmap() {

  return (
    <div id="roadmap-cont">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#F89E26', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #F89E26' }}
          iconStyle={{ background: '#F89E26', color: '#fff' }}
          icon={<GiMissileLauncher />}
        >
          <h3 className="vertical-timeline-element-title">PHASE I</h3>
          <h4 className="vertical-timeline-element-subtitle">PRE-LAUNCH</h4>
          <p>
          • Private Sale to collect funds for fair launch<br/>
          • Fair launch on PCS<br/>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#F89E26', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #F89E26' }}
          iconStyle={{ background: '#F89E26', color: '#fff' }}
          icon={<GiRocketFlight />}
        >
          <h3 className="vertical-timeline-element-title">PHASE II</h3>
          <h4 className="vertical-timeline-element-subtitle">POST LAUNCH</h4>
          <p>
          • CMC &amp; CG Listing<br/>
          • Marketing Push<br/>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#F89E26', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #F89E26' }}
          iconStyle={{ background: '#F89E26', color: '#fff' }}
          icon={<GiPoliceBadge />}
        >
          <h3 className="vertical-timeline-element-title">PHASE III</h3>
          <h4 className="vertical-timeline-element-subtitle">Revival</h4>
          <p>
          • Contract Renounced<br/>
          • Fees reduced to 6%<br/>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
