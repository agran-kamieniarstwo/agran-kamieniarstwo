pobierz najświeższą wersję strony: `git pull origin master`

**żeby dodać plik:**

- dodaj go do odpowiedniego folderu w src/images/.. np. src/images/patterns/plate Nazwa pliku nie może zawierać polskich znaków i musi być pisana jednym ciągiem
- uaktualnij odpowiedni plik w scr/componenets/helpers . Jeśli dodałeś do folderu realizations, to należy uaktualnić plik realizationsList.js. W pliku należy dopisać

```
  import nazwa-pliku from '../../images/realizations/nazwa-pliku.jpg'
```

poniżej

```
  const nazwa-pliku_Obj = { img: <img src={nazwa-pliku} alt="opis zdjęcia, np. 'zielony'" /> }
```

następnie w `export const realizationsList = [` dopisać kolejną linię z nazwą utworzonego obiektu `nazwa-pliku_Obj`. Nie zapomnij o przecinku na końcu :)
zapisz plik

Na koniec w CLI wpisujemy

```
git add --all
```

```
git commit -m "dodalem nowe zdjecie"
```

```
git push origin master
```

**żeby usunąć plik**

- usuń zdjęcie z odpowiedniego folderu
- usuń jego wpis z odpowiedniego pliku w scr/componenets/helpers
  - usuń linie z importem pliku
  - usuń obiekt `const nazwa-pliku_Obj`
  - usuć linię z `nazwa-pliku_Obj` z tablicy `export const .... = [..]`
  - jak nie zrobisz rzeczy powyżej to strona się wysypie :(

zapisz plik

Na koniec w CLI wpisujemy

```
git add --all
```

```
git commit -m "dodalem nowe zdjecie"
```

```
git push origin master
```

**Jeżeli po zmianach coś by nie działało to można przywrócić poprzednia wersję przy użyciu komendy**
**UWAGA - działa tylko jeden raz**

```
git revert HEAD --no-edit
```
