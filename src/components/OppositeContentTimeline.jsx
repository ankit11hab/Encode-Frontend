import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function OppositeContentTimeline() {
  return (
    <React.Fragment>
      <Timeline className='positionLeft'>
        <TimelineItem>
          <TimelineOppositeContent color='text.secondary'>
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Delhi</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color='text.secondary'>
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Ghaziabad</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color='text.secondary'>
            12:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Meerut</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color='text.secondary'>
            3:00 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Lucknow</TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  );
}
