import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "../store";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  withStyles,
  createStyles,
  Theme,
  WithStyles,
  StyleRules
} from "@material-ui/core/styles";
import { fetchExample } from "../store/example/thunk";

const styles: (theme: Theme) => StyleRules<string> = theme =>
  createStyles({
    root: {
      height: "100vh"
    }
  });

type ExampleContainerProps = {
  fetchExample: any;
  count: number;
  isFetching: boolean;
  error?: any;
} & WithStyles<typeof styles>;

const ExampleContainer: React.FC<ExampleContainerProps> = ({ classes, ...props }) => (
  <div className={classes.root}>
    <CssBaseline />
    {props.error !== undefined && (
      <Typography variant="body1">{props.error.message}</Typography>
    )}

    {props.error === undefined && (
      <Typography variant="body1">Count: {props.count}</Typography>
    )}

    {props.isFetching && <Typography variant="body1">Adding...</Typography>}
    {!props.isFetching && (
      <Button
        variant="contained"
        color="default"
        onClick={() => {
          props.fetchExample(props.count);
        }}
      >
        add 10
      </Button>
    )}
  </div>
);

const mapStateToProps = (state: AppState) => ({
  isFetching: state.example.isFetching,
  count: state.example.count,
  error: state.example.error
});

export default connect(mapStateToProps, {
  fetchExample
})(withStyles(styles)(ExampleContainer));
