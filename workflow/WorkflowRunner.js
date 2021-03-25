module.exports = function WorkflowRunner(workflow, startCheckpointId){
    const _checkpointId = startCheckpointId;
    let _currentCheckpoint = workflow.getCheckpoint(_checkpointId);
    this.execute = function (wfState){
        let _currentWfState = wfState;
        while(true){
            const nextTransition = workflow.getNextTransition(_currentWfState, _currentCheckpoint.getId());
            if(!nextTransition) break ;
            _currentWfState = nextTransition.run(_currentWfState);
            _currentCheckpoint = workflow.getCheckpoint(nextTransition.getEndNodeId());
        }
        return _currentWfState;
    };
}