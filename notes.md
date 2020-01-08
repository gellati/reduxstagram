# development notes

Some notes on updates made. Probably more than listed here. And the code could probably be further improved.

## React Router 4 changes

migration instructions:
https://github.com/ReactTraining/react-router/blob/25776d4dc89b8fb2f575884749766355992116b5/packages/react-router/docs/guides/migrating.md#the-router

nesting routes:
https://stackoverflow.com/questions/44452858/nesting-routes-in-react-router-v4

This includes IndexRouter, which is no longer used in version 4.
https://stackoverflow.com/questions/45421014/indexroute-equivalent-in-react-router-v4

React Router changed the route props object so that:
this.props.params -> this.props.match.params
https://stackoverflow.com/questions/45144085/react-this-props-params-undefined