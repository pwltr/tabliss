import * as React from 'react';

interface Props {
  hour12: boolean;
  time: Date;
}

const Digital: React.StatelessComponent<Props> = (props) => {
  return (
    <div className="Time Digital">
      <h1>
        {formattedTime(props)}
      </h1>
    </div>
  );
};

const formattedTime = ({ time, hour12 }: Props) => {
  // Try full browser support
  try {
    return time.toLocaleTimeString(undefined, {
      hour12: hour12,
      hour: 'numeric',
      minute: 'numeric',
    });
  } catch (e) {
    //
  }

  try {
    // Try basic support
    return time.toLocaleTimeString();
  } catch (e) {
    //
  }

  // Can't find a locale
  return time.toLocaleTimeString('en-GB');
};

export default Digital;
