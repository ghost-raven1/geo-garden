// eslint-disable-next-line consistent-return
export default function ({ store, redirect }) {
  if (store.state.auth.loggedIn) {
    return redirect('/');
  }
}
