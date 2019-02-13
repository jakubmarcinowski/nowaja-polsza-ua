import React, { Component } from 'react'
import cookie from 'react-cookies'

import Modal from './Modal'

class Rodo extends Component {
  /*eslint eqeqeq:0*/
  state = { isRodoAccepted: cookie.load('rodo-accepted') }

  acceptCookies = () => {
    this.setState({ isRodoAccepted: true })
    cookie.save('rodo-accepted', true)
  }

  render() {
    const { isRodoAccepted } = this.state

    return isRodoAccepted ? null : (
      <Modal>
        <div className="rodo">
          <p>
            Od dnia 25 maja 2018 r. na terytorium Rzeczypospolitej Polskiej
            stosuje się rozporządzenie Parlamentu Europejskiego i Rady (UE) nr
            2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
            fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
            swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
            (ogólne rozporządzenie o ochronie danych) (Dz. Urz. UE L 119 z
            4.05.2016, str. 1), zwane dalej „RODO”, jak również z tym dniem
            weszła w życie ustawa z dnia 10 maja 2018 r. o ochronie danych
            osobowych (Dz. U. poz. 1000).
          </p>
          <p>
            W związku z wprowadzeniem nowych regulacji prawnych przekazujemy
            poniższe informacje dotyczące przetwarzania danych osobowych oraz o
            zasadach, na jakich się to odbywa. - Administratorem danych jest
            Centrum Polsko-Rosyjskiego Dialogu i Porozumienia, ul. Jasna 14/16A,
            00-041 Warszawa, oraz podmioty, z którymi zawarło ono stosowne umowy
            o przetwarzanie danych osobowych w imieniu Centrum
            Polsko-Rosyjskiego Dialogu i Porozumienia.- Organem nadzorczym w
            rozumieniu RODO, powołanym do kontroli przestrzegania ochrony danych
            osobowych, jest Prezes Urzędu Ochrony Danych Osobowych.- Centrum
            Polsko-Rosyjskiego Dialogu i Porozumienia wyznaczyło inspektora
            ochrony danych w osobie Macieja Łuczaka, z którym można się
            kontaktować drogą mailową pod adresem iod@cprdip.pl lub
            telefonicznie pod numerem +48 502 348 833.- Administrator danych
            pozyskuje dane osobowe w sposób automatyczny w ramach korzystania ze
            stron internetowych administrowania przez Centrum Polsko-Rosyjskiego
            Dialogu i Porozumienia (są one zapisywane w plikach cookies) oraz
            poprzez logowanie się użytkowników korzystających ze stron
            internetowych Centrum Polsko-Rosyjskiego Dialogu i Porozumienia.-
            Dane osobowe to informacje umożliwiające zidentyfikowanie osób
            fizycznych. W przypadku korzystania z naszych stron internetowych
            takimi danymi są w szczególności: imię i nazwisko, adres
            zamieszkania, adres e-mail, login, hasło, adres IP, czy numer
            telefonu.- Gromadzenie i przetwarzanie zebranych danych osobowych
            jest niezbędne do korzystania z prowadzonych przez Centrum
            Polsko-Rosyjskiego Dialogu i Porozumienia serwisów i usług oraz
            wykonywania przez Centrum Polsko-Rosyjskiego Dialogu i Porozumienia
            swoich zadań ustawowych.- Każde pozyskiwanie danych osobowych musi
            być oparte na właściwych podstawach prawnych. Obok stosownego
            umocowania ustawowego oraz umowy zawartej pomiędzy stronami, taką
            podstawą jest także dobrowolne przekazanie danych osobowych i zgoda
            na ich przetwarzanie w celu, w jakim zostały udostępnione
            administratorowi.- Osoba, który wyraziła zgodę na przetwarzania
            danych osobowych jest uprawniona, aby taką zgodę w każdej chwili -
            bez wskazywania jakichkolwiek przyczyn – cofnąć bez wpływu na
            zgodność z prawem przetwarzania, którego dokonano na podstawie zgody
            przed jej cofnięciem. Posiada ona także prawo dostępu do swoich
            danych osobowych, ich sprostowania, usunięcia lub ograniczenia ich
            przetwarzania. Ma także uprawnienie do przeniesienia danych,
            wyrażenia sprzeciwu wobec sposobu przetwarzania danych, a także
            wniesienia skargi do organu nadzorczego w rozumieniu RODO, to jest
            do Prezesa Urzędu Ochrony Danych Osobowych.- Warunkiem korzystania
            ze stron internetowych prowadzonych przez Centrum Polsko-Rosyjskiego
            Dialogu i Porozumienia jest wyrażenie dobrowolnej i niczym
            nieskrępowanej zgody na przetwarzanie danych osobowych w ramach
            obowiązujących przepisów prawnych. - W przypadku korzystania ze
            stron internetowych administrowanych przez Centrum
            Polsko-Rosyjskiego Dialogu i Porozumienia przez osoby poniżej 16
            roku życia konieczne jest wyrażenie stosownej zgody lub jej
            zaaprobowanie przez osobę sprawującą władzę rodzicielską lub opiekę
            nad takim nieletnim.
          </p>
          <p>
            Mając powyższe na uwadze, jeżeli jesteś osobą, która ukończyła 16
            lat i dobrowolnie wyrażasz zgodę na przetwarzanie swoich danych
            osobowych zbieranych automatycznie w ramach korzystania z serwisów i
            usług oferowanych przez Centrum Polsko-Rosyjskiego Dialogu i
            Porozumienia kliknij na krzyżyk z prawej strony wyrażając zgodę na
            przetwarzanie swoich danych osobowych.
          </p>
        </div>
        <button onClick={this.acceptCookies}>Akceptuję</button>
      </Modal>
    )
  }
}

export default Rodo
