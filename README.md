# fullstack-library

Stwórz API do zarządzania wirtualną biblioteką.
Do głównych funkcjonalności powinno należeć:
- rejestracja użytkownika (login, imię, hasło)
- logowanie użytkownika (login, hasło) +

- rejestracja administratora (login, imię, hasło)
- logowanie administratora (login, hasło) +

- dodanie książki (nazwa, ISBN, autor) do puli książek (przez administratora) +
- usunięcie książki z puli książek (przez administratora) +
- edycja detali danych wybranej książki (przez administratora) +

- wypisanie wszystkich książek (przez użytkownika i administratora) +
- wypisanie dostępnych do wypożyczenia książek (przez użytkownika i administratora) +

- wypożyczenie książki (przez użytkownika) +
- zwrot książki (przez użytkownika) +

Użytkownik nie powinien móc wykonać czynności administratora i odwrotnie.
Wypożyczona książka nie może zostać ponownie wypożyczona, chyba że użytkownik, który ją wypożyczył, ją zwróci.
