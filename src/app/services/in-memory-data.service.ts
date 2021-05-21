import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  
  createDb() {
    const users = [
      { 
        id: 1, 
        firstName: 'Oğuzhan', 
        lastName: 'Öksel', 
        email: 'oguzhanoksel@hotmail.com',
        phone: '05346238913',
        github: 'https://github.com/oguzhanoxel',
        linkedin: 'https://www.linkedin.com/in/oğuzhan-öksel-a61993197/',
        instagram: 'https://www.instagram.com/oguzhanoksel/',
        twitter: 'https://twitter.com/oguzhan09130554',
        address: 'Phasellus et sagittis justo. Aenean a lorem eros. Nulla laoreet suscipit quam vitae molestie.',
        description: '13 Kasım 1996 doğumluyum, Beykent Üniversitesi Yazılım Mühendisliği Bölümünü okudum. Kendimi geliştirmek amaçlı yaptığım ilk projelerimi Python/Django framework kullanarak oluşturdum. Şu an ise bazı Bootcamplere katılarak hem başka teknolojileri ve kavramları anlayarak araştırıp tecrübe edinmeye çalışıyorum. Fikir alışverişi için isterseniz benimle iletişime geçebilirsiniz.',
      },
    ];
    
    const comments = [
      { id: 1, content: 'Vestibulum quis elit eget quam feugiat eleifend. Etiam at suscipit sem, sed ultrices augue. Aenean convallis turpis dolor, eget condimentum magna consectetur nec. Duis id magna vulputate, molestie risus non, commodo velit. Nam sed eros ex. Sed non justo mi. Sed at congue est. Quisque orci diam, euismod quis leo eu, commodo lobortis lacus. Vestibulum sit amet nisi a nibh lacinia porttitor non a ante. Sed pellentesque sit amet erat non vehicula. Praesent quis purus consequat libero viverra scelerisque laoreet et nisl. Suspendisse justo dui, egestas ac cursus vitae, venenatis vel mauris. Praesent pretium nunc eget erat pharetra eleifend. Sed lectus augue, facilisis sed lacus sed, accumsan sollicitudin ipsum. Vestibulum sagittis, lacus sed porttitor tempus, felis nibh efficitur nisi, pretium porttitor ante sem eget quam'},
      { id: 2, content: 'Sed tristique sapien odio, at rutrum ex congue vel. Praesent rutrum feugiat luctus. In molestie mattis odio vitae semper. Maecenas aliquam sapien odio, id mollis lectus ornare quis. In cursus faucibus sagittis. Nam nunc lacus, vestibulum sit amet sollicitudin in, luctus vitae velit. Suspendisse ut arcu placerat, facilisis nulla vitae, iaculis ante. Etiam ultricies est risus, id facilisis nunc posuere non. Sed laoreet, nisl nec sagittis porttitor, velit eros vehicula eros, in vulputate diam sapien sit amet purus.'},
      { id: 3, content: 'Vivamus tincidunt gravida lorem eu porta. Donec consectetur consequat tempus. Aliquam sapien nulla, ultrices at sapien placerat, dapibus interdum nisl. Nullam ex eros, vulputate at ligula a, fermentum lacinia odio. Integer at ante ante. Quisque malesuada sed lorem vel pharetra. Cras id tempus sem. Curabitur in risus et lacus tempor rhoncus id id augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed suscipit massa eu leo elementum, id bibendum purus vulputate. Aenean condimentum nec libero ut euismod. Suspendisse potenti. Maecenas id tortor elementum, pharetra metus nec, accumsan ante. Integer sagittis facilisis dolor vel lacinia. Cras eu dapibus ipsum.'},
      { id: 4, content: 'Donec sit amet scelerisque nisl. Vivamus neque diam, viverra ut convallis ullamcorper, tempor sit amet velit. Donec interdum leo dui. Vivamus pretium lorem dolor, sit amet auctor felis aliquet id. Cras finibus finibus tellus, et gravida nisl auctor ac. Vestibulum tristique orci risus, quis ultrices nisi porttitor non. Suspendisse potenti. Maecenas sed purus viverra, pharetra tortor eu, dictum orci. Vestibulum aliquam at purus commodo ultricies. Vestibulum non ligula condimentum, pretium neque quis, porttitor arcu. Donec sem turpis, lacinia vel elit ullamcorper, convallis mattis sem.'},
      { id: 5, content: 'Vestibulum semper est nec elit ultricies vulputate. Donec iaculis congue gravida. Duis a est sollicitudin, semper justo vel, imperdiet elit. Etiam turpis nisl, molestie id ultrices vestibulum, feugiat non lacus. Morbi interdum non enim eu volutpat. Duis sit amet porta ex. Proin lobortis fringilla hendrerit. Pellentesque facilisis ultricies lorem at ultricies. Nulla eget tincidunt ipsum, vel imperdiet lacus. Cras pharetra odio ut ultricies porttitor. In vitae nunc hendrerit, sodales augue a, sagittis leo. Aliquam et porttitor velit. Mauris ac luctus sem, eget dignissim est. Suspendisse vel mi pulvinar, scelerisque eros ut, dignissim risus. Maecenas fermentum id odio ac convallis. In libero tellus, gravida eget lectus sed, commodo dignissim turpis.'},
    ];

    const githubProjectLinks = [
      { id: 1, title: 'hr-management-system', url: 'https://github.com/oguzhanoxel/hr-management-system', description: 'Ut eu auctor augue. Ut sollicitudin et neque non sagittis. Praesent iaculis rhoncus urna. Pellentesque tempus mattis leo, vel bibendum dui gravida vitae. Etiam mollis dapibus elit, in eleifend magna suscipit nec.'},
      { id: 2, title: 'final-project-with-java', url: 'https://github.com/oguzhanoxel/final-project-with-java', description: 'Mauris quis sapien at odio sollicitudin aliquam ac in mi. Cras eu justo dui. Phasellus pharetra dignissim nisl, et hendrerit nulla luctus vitae.'},
      { id: 3, title: 're-cap-project-frontend', url: 'https://github.com/oguzhanoxel/re-cap-project-frontend', description: 'Vestibulum aliquet tellus orci, quis rutrum augue congue eget. Suspendisse vitae pretium urna. Vestibulum condimentum, leo sed cursus lacinia, ex erat mattis nibh, id lobortis nunc est id lectus. In accumsan sodales ullamcorper. Sed quis erat a lectus tristique cursus non dapibus magna. Maecenas id erat velit.'},
      { id: 4, title: 'ReCapProject', url: 'https://github.com/oguzhanoxel/ReCapProject', description: 'Ut aliquam diam ligula, non sollicitudin diam convallis eget. Suspendisse posuere efficitur nisl, a volutpat sapien ornare a. Fusce ornare scelerisque eros, quis tempus dolor posuere ut.'},
      { id: 5, title: 'kamp-frontend-northwind', url: 'https://github.com/oguzhanoxel/kamp-frontend-northwind', description: 'Vestibulum velit ipsum, finibus et tempor vel, pellentesque ut eros. Quisque mollis velit dapibus arcu consectetur aliquam.'},
      { id: 6, title: 'FinalProject', url: 'https://github.com/oguzhanoxel/FinalProject', description: 'Fusce ac iaculis nunc. Curabitur venenatis, ante non mollis facilisis, diam tellus rutrum eros, vel auctor nulla libero vitae nisl.'},
      { id: 7, title: 'django-blog', url: 'https://github.com/oguzhanoxel/django-blog', description: 'Sed finibus vitae metus quis placerat. Sed quam ligula, molestie at commodo a, tincidunt in libero. Ut rhoncus elit ac nulla pharetra, a ultrices est volutpat.'},
      { id: 8, title: 'django-forms', url: 'https://github.com/oguzhanoxel/django-forms', description: 'Maecenas a sapien volutpat, malesuada nisl ut, tincidunt arcu. Suspendisse sodales gravida cursus. Quisque tincidunt sagittis nibh quis congue. Vivamus hendrerit erat non ex aliquam pretium.'},
      { id: 9, title: 'django-rest-api', url: 'https://github.com/oguzhanoxel/django-rest-api', description: 'Nullam non enim ex. Pellentesque scelerisque vehicula elit congue ultricies. Sed ultricies dui a orci pulvinar euismod. Quisque non mi cursus, imperdiet mauris et, porta erat.'},
    ];

    return {users, githubProjectLinks, comments};
  }
}
