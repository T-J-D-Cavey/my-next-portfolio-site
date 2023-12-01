type ProjectItemComponentProps = {
    mode: string;
    modeStyles: Record<string, any>;
  };

  export default function ClickABug({mode, modeStyles}: ProjectItemComponentProps) {

    return (
        <h3>Click a bug</h3>
    )
}