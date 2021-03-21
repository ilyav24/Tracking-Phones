import { Injectable } from '@angular/core';
import { Phone } from './phone';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private phonesUrl = 'api/phones';
  phones: Phone[] = [];

  constructor(
    private MessageService: MessageService,
    private http: HttpClient,
  ) { }

  getPhones(): Observable<Phone[]> {
    // TODO: send message _after_ fethching the phones
    this.MessageService.add('PhoneService: fetched phones')
    return this.http.get<Phone[]>(this.phonesUrl)
    .pipe(
      catchError(this.handleError<Phone[]>('getPhones', []))
    );
  }


  getPhone(id: number): Observable<Phone> {
    // TODO: send message _after_ fethching the phones
    const url = `${this.phonesUrl}/${id}`;
    return this.http.get<Phone>(url).pipe(
      tap(_ => this.log(`fetched phone id=${id}`)),
      catchError(this.handleError<Phone>(`getPhone id=${id}`))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.MessageService.add(`PhoneService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
