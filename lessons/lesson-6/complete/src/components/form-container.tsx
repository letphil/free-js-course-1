interface IFormContainer {
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function FormContainer({ style, children }: IFormContainer) {
  return (
    <div
      style={{
        flex: 1,
        flexDirection: "column",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
