import View from './View';
import previewView from './previewView';
import icons from '../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes Found for your query! Please try again ;)';
  _message = 'We could not found that recipe. Please try another one!';
  _generateMarkup() {
    return this._data
      .map((result) => previewView.render(result, false))
      .join('');
  }
}

export default new ResultsView();
