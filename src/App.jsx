import ItemDetailContainer from "./containers/ItemDetailContainer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer />}
        />
        <Route
          path="/producto/:id"
          element={<ItemDetailContainer />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
