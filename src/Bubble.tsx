import React from 'react';

interface HeaderProps {
  text: string;
  backgroundColor: string;
  key: string;
}
interface ResultsBubbleProps {
  headers: HeaderProps[];
  resultsTable: React.ReactElement;
}
export const Bubble = ({ headers, resultsTable }: ResultsBubbleProps) => {

  return (
    <>
      <div className="dialogue-character-wrap">
        { headers.map(({backgroundColor, key, text}) => {
            return (
              <div className="dialogue-character" style={{ backgroundColor }} key={key}>
                <slot name="character"><b>{text}</b></slot>
              </div>
            )
          }) }
      </div>
      <div className="dialogue">
        <div className="dialogue-text">{resultsTable}</div>

      </div>
    </>
  );

}

export default Bubble;
