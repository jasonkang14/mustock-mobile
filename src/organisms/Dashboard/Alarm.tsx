import styled from "styled-components";
import Item from "atoms/Item";
import { HeaderIcon, SectionTitle } from "atoms/Headers";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import { Widget } from "templates/Screen";

const alarmArray = [
  { text: "알림 알림 알림 ", isNew: false },
  { text: "알림 알림 알림 ", isNew: false },
  { text: "알림 알림 알림 ", isNew: false },
  { text: "중요알림 중요알림 중요알림 중요알림 중요알림", isNew: true },
  { text: "중요알림 중요알림 중요알림 중요알림 중요알림", isNew: true },
  { text: "중요알림 중요알림 중요알림 중요알림 중요알림", isNew: true },
];

export default function Alarm() {
  const sliceString = (text: string) => {
    if (text.length < 24) {
      return text;
    }
    return `${text.slice(0, 22)} ...`;
  };

  return (
    <AlarmWidget>
      <SectionTitle>
        <HeaderIcon src="/icons/ic-alarm.svg" />
        알림
      </SectionTitle>
      <Content>
        {alarmArray.map((alarm, index) => {
          const { text, isNew } = alarm;
          return (
            <AlarmWrap key={`alarm-${index}`}>
              <Item margin="mid" />
              {isNew ? (
                <NewAlarm>{sliceString(text)}</NewAlarm>
              ) : (
                <PreviousAlarm>{sliceString(text)}</PreviousAlarm>
              )}
            </AlarmWrap>
          );
        })}
      </Content>
    </AlarmWidget>
  );
}

const AlarmWidget = styled(Widget)`
  height: 130px;
  overflow: scroll;
`;

const Content = styled.section`
  margin-top: 11px;
  overflow: scroll;
  > div:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const AlarmWrap = styled.div`
  ${mixins.flexRow}
  align-items: center;
`;

const PreviousAlarm = styled.h5`
  ${fonts.normal}
  line-height: 160%;
  color: var(--color-04);
  margin: 0;
`;

const NewAlarm = styled(PreviousAlarm)`
  color: var(--color-09);
`;
