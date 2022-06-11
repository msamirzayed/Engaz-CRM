import { Injectable } from '@angular/core';
import { APIURL, IURL } from '../../../../../core/services/http/api';
import { CoreService } from '../../../../../core/services/http/core.service';

@Injectable({
  providedIn: 'root',
})
export class CommentsService extends CoreService {
  apiUrl: IURL = APIURL.comments;
}
