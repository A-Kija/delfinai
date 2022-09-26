<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h2>BreakDowns</h2>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        @forelse($breakdowns as $breakdown)
                        <li class="list-group-item">
                            <div class="breakdowns-list">
                                <div class="content">
                                    <div class="trucks-list">
                                        <div class="content">
                                            <h2><span></span>{{$breakdown->title}}</h2>
                                            <h4><span>status: </span>{{$breakdown->status}}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="buttons">
                                    <button type="button" class="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </li>
                        @empty
                        <li class="list-group-item">No breakdowns found</li>
                        @endforelse
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
