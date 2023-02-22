type Props = {
  props: {
    color: string;
    name: string;
    description: string;
    icon: JSX.Element;
    arrow: boolean;
  };
};

const ProcessCard = ({ props }: Props) => {
  return (
    <div
      className="flex h-auto w-1/4 flex-col items-center border-4"
      style={{ borderColor: props.color }}
    >
      <div className="relative mt-4 h-36 w-36">{props.icon}</div>
      <h2 className="text-center text-3xl font-bold mb-4" style={{color: props.color }}>{props.name}</h2>
      <div
        className="relative h-full px-12 py-8"
        style={{ backgroundColor: props.color }}
      >
        {props.arrow && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            width="100%"
            viewBox="0 0 200 200"
            className="absolute top-[35%] left-[98%] z-10 overflow-visible"
          >
            <polygon style={{ fill: props.color }} points="0,0 25,25 0,50" />
          </svg>
        )}
        <p className="text-lg font-medium text-white">{props.description}</p>
      </div>
    </div>
  );
};

export default ProcessCard;
