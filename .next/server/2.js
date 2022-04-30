exports.ids = [2];
exports.modules = {

/***/ "./docs/cloud-runner/v0/02-getting-started/kuberentes.md":
/*!***************************************************************!*\
  !*** ./docs/cloud-runner/v0/02-getting-started/kuberentes.md ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# Getting Started AWS\n\n### Requirements\n\n- You must have a Kuberentes cluster setup and ready that supports persistent volumes.\n- Create a kubeconfig and encode it as base64.\n\n### K8s Credentials\n\nSetup the following as `env` variables for the GitHub build step:\n\n- `kubeConfig` (should be encoded as base64)\n\n### Standard configuration\n\nLink to configuration page\n\n#### Allowed CPU/Memory combinations\n\n- `0.25 vCPU` - 0.5 GB, 1 GB, 2 GB\n- `0.5 vCPU` - 1 GB, 2 GB, 3 GB, 4 GB\n- `1 vCPU` - 2 GB, 3 GB, 4 GB, 5 GB, 6 GB, 7 GB, 8 GB\n- `2 vCPU` - Between 4 GB and 16 GB in 1-GB increments\n- `4 vCPU` - Between 8 GB and 30 GB in 1-GB increments\n\nDo not include the vCPU or GB suffix. For example:\n\n```yaml\n- remoteBuildMemory: 2\n- remoteBuildCpu: 0.5\n```\n\n### Example build step\n\n```yaml\n- uses: game-ci/unity-builder@cloud-runner-develop\n  id: k8s-unity-build\n  timeout-minutes: 30\n  env:\n    UNITY_LICENSE: ${{ secrets.UNITY_LICENSE }}\n  with:\n    remoteBuildCluster: k8s\n    cloudRunnerMemory: 4096\n    cloudRunnerCpu: 1024\n    projectPath: ${{ matrix.projectPath }}\n    unityVersion: ${{ matrix.unityVersion }}\n    targetPlatform: ${{ matrix.targetPlatform }}\n    githubToken: ${{ secrets.GITHUB_TOKEN }}\n```\n\nCurrently kuberentes builds do not save their persistent volumes beyond a cloud runner job, so you may want to export the results to cloud storage e.g:\n\n```yaml\n- uses: game-ci/unity-builder@cloud-runner-develop\n  id: k8s-unity-build\n  timeout-minutes: 30\n  with:\n    cloudRunnerCluster: k8s\n    UNITY_LICENSE: ${{ secrets.UNITY_LICENSE }}\n    targetPlatform: ${{ matrix.targetPlatform }}\n    kubeConfig: ${{ steps.read-base64.outputs.base64 }}\n    githubToken: ${{ secrets.GITHUB_TOKEN }}\n    projectPath: test-project\n    unityVersion: ${{ matrix.unityVersion }}\n    versioning: None\n    postBuildSteps: |\n      - name: upload\n        image: amazon/aws-cli\n        commands: |\n          aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID --profile default\n          aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY --profile default\n          aws configure set region $AWS_DEFAULT_REGION --profile default\n          aws s3 ls\n          aws s3 ls game-ci-test-storage\n          ls /data/cache/$CACHE_KEY\n          echo \"/data/cache/$CACHE_KEY/build/build-$BUILD_GUID.zip s3://game-ci-test-storage/$CACHE_KEY/$BUILD_FILE\"\n          aws s3 cp /data/cache/$CACHE_KEY/build/build-$BUILD_GUID.zip s3://game-ci-test-storage/$CACHE_KEY/build-$BUILD_GUID.zip\n        secrets:\n        - name: awsAccessKeyId\n          value: ${{ secrets.AWS_ACCESS_KEY_ID }}\n        - name: awsSecretAccessKey\n          value: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n        - name: awsDefaultRegion\n          value: eu-west-2\n```\n");

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2Nsb3VkLXJ1bm5lci92MC8wMi1nZXR0aW5nLXN0YXJ0ZWQva3ViZXJlbnRlcy5tZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQWUsbS9CQUFvN0IseUJBQXlCLG1IQUFtSCxzQkFBc0IsdUJBQXVCLHVCQUF1Qix5QkFBeUIseUJBQXlCLHNCQUFzQix3QkFBd0IsMlVBQTJVLHlCQUF5Qix5QkFBeUIseUJBQXlCLHFCQUFxQixvQ0FBb0Msc0JBQXNCLHdCQUF3QixzREFBc0QsdUJBQXVCLHd4QkFBd3hCLDZCQUE2QiwwREFBMEQsaUNBQWlDLHNFQUFzRSxFIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIiMgR2V0dGluZyBTdGFydGVkIEFXU1xcblxcbiMjIyBSZXF1aXJlbWVudHNcXG5cXG4tIFlvdSBtdXN0IGhhdmUgYSBLdWJlcmVudGVzIGNsdXN0ZXIgc2V0dXAgYW5kIHJlYWR5IHRoYXQgc3VwcG9ydHMgcGVyc2lzdGVudCB2b2x1bWVzLlxcbi0gQ3JlYXRlIGEga3ViZWNvbmZpZyBhbmQgZW5jb2RlIGl0IGFzIGJhc2U2NC5cXG5cXG4jIyMgSzhzIENyZWRlbnRpYWxzXFxuXFxuU2V0dXAgdGhlIGZvbGxvd2luZyBhcyBgZW52YCB2YXJpYWJsZXMgZm9yIHRoZSBHaXRIdWIgYnVpbGQgc3RlcDpcXG5cXG4tIGBrdWJlQ29uZmlnYCAoc2hvdWxkIGJlIGVuY29kZWQgYXMgYmFzZTY0KVxcblxcbiMjIyBTdGFuZGFyZCBjb25maWd1cmF0aW9uXFxuXFxuTGluayB0byBjb25maWd1cmF0aW9uIHBhZ2VcXG5cXG4jIyMjIEFsbG93ZWQgQ1BVL01lbW9yeSBjb21iaW5hdGlvbnNcXG5cXG4tIGAwLjI1IHZDUFVgIC0gMC41IEdCLCAxIEdCLCAyIEdCXFxuLSBgMC41IHZDUFVgIC0gMSBHQiwgMiBHQiwgMyBHQiwgNCBHQlxcbi0gYDEgdkNQVWAgLSAyIEdCLCAzIEdCLCA0IEdCLCA1IEdCLCA2IEdCLCA3IEdCLCA4IEdCXFxuLSBgMiB2Q1BVYCAtIEJldHdlZW4gNCBHQiBhbmQgMTYgR0IgaW4gMS1HQiBpbmNyZW1lbnRzXFxuLSBgNCB2Q1BVYCAtIEJldHdlZW4gOCBHQiBhbmQgMzAgR0IgaW4gMS1HQiBpbmNyZW1lbnRzXFxuXFxuRG8gbm90IGluY2x1ZGUgdGhlIHZDUFUgb3IgR0Igc3VmZml4LiBGb3IgZXhhbXBsZTpcXG5cXG5gYGB5YW1sXFxuLSByZW1vdGVCdWlsZE1lbW9yeTogMlxcbi0gcmVtb3RlQnVpbGRDcHU6IDAuNVxcbmBgYFxcblxcbiMjIyBFeGFtcGxlIGJ1aWxkIHN0ZXBcXG5cXG5gYGB5YW1sXFxuLSB1c2VzOiBnYW1lLWNpL3VuaXR5LWJ1aWxkZXJAY2xvdWQtcnVubmVyLWRldmVsb3BcXG4gIGlkOiBrOHMtdW5pdHktYnVpbGRcXG4gIHRpbWVvdXQtbWludXRlczogMzBcXG4gIGVudjpcXG4gICAgVU5JVFlfTElDRU5TRTogJHt7IHNlY3JldHMuVU5JVFlfTElDRU5TRSB9fVxcbiAgd2l0aDpcXG4gICAgcmVtb3RlQnVpbGRDbHVzdGVyOiBrOHNcXG4gICAgY2xvdWRSdW5uZXJNZW1vcnk6IDQwOTZcXG4gICAgY2xvdWRSdW5uZXJDcHU6IDEwMjRcXG4gICAgcHJvamVjdFBhdGg6ICR7eyBtYXRyaXgucHJvamVjdFBhdGggfX1cXG4gICAgdW5pdHlWZXJzaW9uOiAke3sgbWF0cml4LnVuaXR5VmVyc2lvbiB9fVxcbiAgICB0YXJnZXRQbGF0Zm9ybTogJHt7IG1hdHJpeC50YXJnZXRQbGF0Zm9ybSB9fVxcbiAgICBnaXRodWJUb2tlbjogJHt7IHNlY3JldHMuR0lUSFVCX1RPS0VOIH19XFxuYGBgXFxuXFxuQ3VycmVudGx5IGt1YmVyZW50ZXMgYnVpbGRzIGRvIG5vdCBzYXZlIHRoZWlyIHBlcnNpc3RlbnQgdm9sdW1lcyBiZXlvbmQgYSBjbG91ZCBydW5uZXIgam9iLCBzbyB5b3UgbWF5IHdhbnQgdG8gZXhwb3J0IHRoZSByZXN1bHRzIHRvIGNsb3VkIHN0b3JhZ2UgZS5nOlxcblxcbmBgYHlhbWxcXG4tIHVzZXM6IGdhbWUtY2kvdW5pdHktYnVpbGRlckBjbG91ZC1ydW5uZXItZGV2ZWxvcFxcbiAgaWQ6IGs4cy11bml0eS1idWlsZFxcbiAgdGltZW91dC1taW51dGVzOiAzMFxcbiAgd2l0aDpcXG4gICAgY2xvdWRSdW5uZXJDbHVzdGVyOiBrOHNcXG4gICAgVU5JVFlfTElDRU5TRTogJHt7IHNlY3JldHMuVU5JVFlfTElDRU5TRSB9fVxcbiAgICB0YXJnZXRQbGF0Zm9ybTogJHt7IG1hdHJpeC50YXJnZXRQbGF0Zm9ybSB9fVxcbiAgICBrdWJlQ29uZmlnOiAke3sgc3RlcHMucmVhZC1iYXNlNjQub3V0cHV0cy5iYXNlNjQgfX1cXG4gICAgZ2l0aHViVG9rZW46ICR7eyBzZWNyZXRzLkdJVEhVQl9UT0tFTiB9fVxcbiAgICBwcm9qZWN0UGF0aDogdGVzdC1wcm9qZWN0XFxuICAgIHVuaXR5VmVyc2lvbjogJHt7IG1hdHJpeC51bml0eVZlcnNpb24gfX1cXG4gICAgdmVyc2lvbmluZzogTm9uZVxcbiAgICBwb3N0QnVpbGRTdGVwczogfFxcbiAgICAgIC0gbmFtZTogdXBsb2FkXFxuICAgICAgICBpbWFnZTogYW1hem9uL2F3cy1jbGlcXG4gICAgICAgIGNvbW1hbmRzOiB8XFxuICAgICAgICAgIGF3cyBjb25maWd1cmUgc2V0IGF3c19hY2Nlc3Nfa2V5X2lkICRBV1NfQUNDRVNTX0tFWV9JRCAtLXByb2ZpbGUgZGVmYXVsdFxcbiAgICAgICAgICBhd3MgY29uZmlndXJlIHNldCBhd3Nfc2VjcmV0X2FjY2Vzc19rZXkgJEFXU19TRUNSRVRfQUNDRVNTX0tFWSAtLXByb2ZpbGUgZGVmYXVsdFxcbiAgICAgICAgICBhd3MgY29uZmlndXJlIHNldCByZWdpb24gJEFXU19ERUZBVUxUX1JFR0lPTiAtLXByb2ZpbGUgZGVmYXVsdFxcbiAgICAgICAgICBhd3MgczMgbHNcXG4gICAgICAgICAgYXdzIHMzIGxzIGdhbWUtY2ktdGVzdC1zdG9yYWdlXFxuICAgICAgICAgIGxzIC9kYXRhL2NhY2hlLyRDQUNIRV9LRVlcXG4gICAgICAgICAgZWNobyBcXFwiL2RhdGEvY2FjaGUvJENBQ0hFX0tFWS9idWlsZC9idWlsZC0kQlVJTERfR1VJRC56aXAgczM6Ly9nYW1lLWNpLXRlc3Qtc3RvcmFnZS8kQ0FDSEVfS0VZLyRCVUlMRF9GSUxFXFxcIlxcbiAgICAgICAgICBhd3MgczMgY3AgL2RhdGEvY2FjaGUvJENBQ0hFX0tFWS9idWlsZC9idWlsZC0kQlVJTERfR1VJRC56aXAgczM6Ly9nYW1lLWNpLXRlc3Qtc3RvcmFnZS8kQ0FDSEVfS0VZL2J1aWxkLSRCVUlMRF9HVUlELnppcFxcbiAgICAgICAgc2VjcmV0czpcXG4gICAgICAgIC0gbmFtZTogYXdzQWNjZXNzS2V5SWRcXG4gICAgICAgICAgdmFsdWU6ICR7eyBzZWNyZXRzLkFXU19BQ0NFU1NfS0VZX0lEIH19XFxuICAgICAgICAtIG5hbWU6IGF3c1NlY3JldEFjY2Vzc0tleVxcbiAgICAgICAgICB2YWx1ZTogJHt7IHNlY3JldHMuQVdTX1NFQ1JFVF9BQ0NFU1NfS0VZIH19XFxuICAgICAgICAtIG5hbWU6IGF3c0RlZmF1bHRSZWdpb25cXG4gICAgICAgICAgdmFsdWU6IGV1LXdlc3QtMlxcbmBgYFxcblwiOyJdLCJzb3VyY2VSb290IjoiIn0=