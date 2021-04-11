/*
    on_en_a_gros Free JVC
    Copyright (C) 2021  Provencal le Gaulois

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

const observer = new MutationObserver(function(mutations, me) {
    let popup = document.getElementById('didomi-popup');
    if (popup) {
        popup.remove();
    }

    if (document.body.classList.contains('didomi-popup-open')) {
        document.body.classList.remove('didomi-popup-open');
    }
});

observer.observe(document, {
    subtree: true,
    childList: true
});